import { useCallback, useEffect, useRef, useState, lazy, Suspense } from "react";
const PresetApplied = lazy(() => import("./PresetApplied"));
function PhotoEditor() {
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hue: 0,
    blur: 0,
    sepia: 0,
    grayscale: 0,
    vignette: 0,
    colorTemperature: 0,
    tint: 0,
    exposure: 0,
    vibrance: 100,
    clarity: 0,
  });
  const imageRef = useRef();

  const canvasRef = useRef(null);

  const drawImage = useCallback((img) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    // Original image size
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;

    // Set a max display size (optional - skip if you want full size)
    const maxDisplayWidth = 800;
    const maxDisplayHeight = 600;

    let displayWidth = naturalWidth;
    let displayHeight = naturalHeight;

    const widthRatio = maxDisplayWidth / naturalWidth;
    const heightRatio = maxDisplayHeight / naturalHeight;
    const scale = Math.min(widthRatio, heightRatio, 1); // never upscale

    displayWidth = naturalWidth * scale;
    displayHeight = naturalHeight * scale;

    // Set actual canvas resolution
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;

    // Set canvas display size
    canvas.style.width = `${displayWidth}px`;
    canvas.style.height = `${displayHeight}px`;

    // Clear and scale
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.translate(displayWidth / 2, displayHeight / 2);

    // Compose filters
    const filtersArr = [
      `brightness(${filters.brightness + filters.exposure}%)`,
      `contrast(${filters.contrast + filters.clarity}%)`,
      `saturate(${Math.min(filters.saturation + filters.vibrance - 100, 300)}%)`,
      `hue-rotate(${filters.hue + filters.tint}deg)`,
      `blur(${filters.blur}px)`,
      `sepia(${filters.sepia}%)`,
      `grayscale(${filters.grayscale}%)`,
    ];

    if (filters.colorTemperature !== 0) {
      const temp = filters.colorTemperature;
      if (temp > 0) {
        filtersArr.push(`sepia(${temp * 0.3}%)`);
        filtersArr.push(`hue-rotate(${-temp * 0.1}deg)`);
      } else {
        filtersArr.push(`hue-rotate(${Math.abs(temp) * 0.5}deg)`);
        filtersArr.push(`saturate(${100 + Math.abs(temp) * 0.2}%)`);
      }
    }

    ctx.filter = filtersArr.join(" ");

    // Draw image centered with proper aspect ratio
    ctx.drawImage(
      img,
      -displayWidth / 2,
      -displayHeight / 2,
      displayWidth,
      displayHeight
    );

    // Vignette
    if (filters.vignette > 0) {
      const gradient = ctx.createRadialGradient(
        0, 0, 0,
        0, 0, Math.max(displayWidth, displayHeight) * 0.7
      );
      gradient.addColorStop(0, `rgba(0,0,0,0)`);
      gradient.addColorStop(1, `rgba(0,0,0,${filters.vignette / 100})`);

      ctx.fillStyle = gradient;
      ctx.fillRect(
        -displayWidth / 2,
        -displayHeight / 2,
        displayWidth,
        displayHeight
      );
    }

    ctx.restore();
  }, [
    filters.blur, filters.brightness, filters.clarity, filters.colorTemperature,
    filters.contrast, filters.exposure, filters.grayscale, filters.hue,
    filters.saturation, filters.sepia, filters.tint, filters.vibrance, filters.vignette
  ]);


  const handleImageUpload = useCallback((event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      setSelected(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.crossOrigin = "anonymous";

      img.onload = async () => {
        try {
          await img.decode(); // Ensure image is fully decoded
          setSelected(img);   // Save image to state
          drawImage(img);     // Now draw it safely
        } catch (err) {
          console.error("Image decode failed:", err);
        }
      };

      img.src = e.target?.result;
    };

    reader.readAsDataURL(file);
  }, [drawImage]);


    useEffect(() => {
        if (selected) {
            drawImage(selected)
        }
    }, [selected, drawImage])

    const applyPresetFilter = (presetAdjustments) => {
        setFilters((prev) => ({
            ...prev,
            ...presetAdjustments,
        }))
      }


    const downloadImage = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        const link = document.createElement("a")
        link.download = "edited-image.png"
        link.href = canvas.toDataURL()
        link.click()
      }
  function handleReset() {
    setFilters(() => ({
      contrast: 100,
      exposure: 100,
      grayscale: 0,
      saturation: 100,
    }));
  }


  return (
    <Suspense fallback={<>...</>}>
      <div className="container my-4">
        <p className="text-center text-black fw-semibold fs-3 learnWithClickHeading">
          Learn with Click
        </p>
        <p className="fs-5 text-center text-black" style={{ fontWeight: 200 }}>
          Try out our amazing new in-built feature of Photo Editor.{" "}
        </p>
        {selected === null ? (
          <div className="d-flex rounded-4 gap-2 justify-content-center align-items-center">
            <input
              type="file"
              onChange={handleImageUpload}
              ref={imageRef}
              accept="image/*"
              className="d-none"
            />
            <button
              className="btn muiPurpleOutline btn-lg fw-semibold"
              onClick={() => imageRef.current.click()}
            >
              Upload an image
            </button>
          </div>
        ) : (
          <div
            className="p-2 col-12 col-lg-10 mx-auto row rounded-4 shadow"
            style={{ backgroundColor: "#eee" }}
          >
            <div className="left col-xl-8">
              <div
                className="d-flex align-items-center justify-content-center rounded-4 p-4 border-2 "
                style={{ backgroundColor: "#eee", borderStyle:'dashed', objectFit: 'contain'}}
              >
                  <canvas ref={canvasRef} className="rounded-3" style={{objectFit:'contain', maxWidth:'100%'}} />
              </div>
              <div className="moreOptions mt-2">
                <button
                  onClick={() => downloadImage()}
                  className="btn fw-semibold border-0 muiPurpleOutline"
                >
                  DOWNLOAD
                </button>
                <button
                  onClick={() => handleReset()}
                  className="btn fw-semibold border-0 ms-1 text-danger dangerOutline"
                >
                  RESET
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="btn fw-semibold border-0 ms-1 text-danger dangerOutline"
                >
                  SELECT NEW
                </button>
              </div>
            </div>
            <div className="right col-xl-4">
              <div className="rounded-4 row p-3 bg-white">
                <div className="filters">
                  <p className="fs-4 fw-bold text-black underline">Preset Filters</p>
                  <PresetApplied onApplyFilter={applyPresetFilter} disabled={!selected} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}

export default PhotoEditor;
