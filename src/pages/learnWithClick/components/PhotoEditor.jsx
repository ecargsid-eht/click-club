import { useRef, useState } from "react"

function PhotoEditor() {
    const [selected, setSelected] = useState(null);
    const [filters, setFilters] = useState({ contrast: 100, exposure: 100, grayscale: 0, saturation: 100 });
    const imageRef = useRef()

    function handleChange(filterName, value) {
        switch (filterName) {
            case 'contrast':
                setFilters(prev => ({ ...prev, contrast: Number(value) + 100 }));
                break;
            case 'exposure':
                setFilters(prev => ({ ...prev, exposure: Number(value) + 100 }));
                break;
            case 'grayscale':
                setFilters(prev => ({ ...prev, grayscale: Number(value) }));
                break;
            case 'saturation':
                setFilters(prev => ({ ...prev, saturation: Number(value) + 100 }));
                break;
            default:
            // DO NOTHING
        }
    }

    function handleReset(){
        setFilters(() => ({ contrast: 100, exposure: 100, grayscale: 0, saturation: 100 }))
    }

    function handleDownload(){
        const image = document.getElementsByClassName('newImage')[0];
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas dimensions to match the image
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        // Create a temporary image to remove CSS filters
        const tempImage = new Image();
        tempImage.crossOrigin = "anonymous"; // Handle cross-origin images
        tempImage.src = image.src;

        tempImage.onload = () => {
            // Apply filters directly to the canvas
            ctx.filter = getComputedStyle(image).filter; // Get the CSS filter styles
            ctx.drawImage(tempImage, 0, 0);

            // Trigger download
            const link = document.createElement('a');
            link.download = 'filtered-image.png'; // Set the file name
            link.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
            link.click();
        };
    }
    return (
        <div className="container mt-4 mb-4">
            <p className="text-center text-black fw-semibold fs-3 learnWithClickHeading">Learn with Click</p>
            <p className="fs-5 text-center text-black" style={{ fontWeight: 200 }}>Try out our amazing new in-built feature of Photo Editor. </p>
            {selected === null ?

                <div className="d-flex rounded-4 gap-2 justify-content-center align-items-center">
                    <input type="file" onChange={(e) => { setSelected(e.target.files[0]) }} ref={imageRef} className="d-none" />
                    <button className="btn muiPurpleOutline btn-lg fw-semibold" onClick={() => imageRef.current.click()}>Upload an image</button>
                </div>
                :

                <div className="p-2 col-lg-10 mx-auto d-flex gap-2 rounded-4 shadow" style={{ backgroundColor: "#eee", }}>
                    <div className="left">
                        <div className="position-relative overflow-hidden rounded-4" style={{ backgroundColor: "#eee"}}>
                            <img className="bg-danger border-0 rounded-4 newImage" alt="New image" style={{
                                filter: `contrast(${filters.contrast}%) brightness(${filters.exposure}%) saturate(${filters.saturation}%) grayscale(${filters.grayscale}%)`,
                                height:'100%',
                                width:'100%',
                            }} src={URL.createObjectURL(selected)} />
                        </div>
                        <div className="moreOptions mt-2">
                            <button onClick={() => handleDownload()} className="btn fw-semibold border-0 muiPurpleOutline">DOWNLOAD</button>
                            <button onClick={() => handleReset()} className="btn fw-semibold border-0 ms-1 text-danger dangerOutline">RESET</button>
                        </div>
                    </div>
                    <div className="right col-lg-3">
                        <div className="rounded-4 p-3 bg-white h-100">
                            <p className="fs-5 text-black mb-1">Original Image Preview</p>
                            <img src={URL.createObjectURL(selected)} className="img-fluid object-fit-contain rounded-2 w-100" alt="" />
                            <div className="filters mt-4">
                                <div className="mb-3">
                                    <p className="fs-5 text-black fw-light mb-0">Contrast</p>
                                    <input type="range" value={filters.contrast-100} onChange={(e) => handleChange('contrast', e.target.value)} min={'-100'} max={'100'} defaultValue={'0'} className="form-range" id="contrast" />
                                </div>
                                <div className="mb-3">
                                    <p className="fs-5 text-black fw-light mb-0">Exposure</p>
                                    <input type="range" value={filters.exposure-100} onChange={(e) => handleChange('exposure', e.target.value)} min={'-100'} max={'100'} defaultValue={'0'} className="form-range" id="exposure" />
                                </div>
                                <div className="mb-3">
                                    <p className="fs-5 text-black fw-light mb-0">Grayscale</p>
                                    <input type="range" value={filters.grayscale} onChange={(e) => handleChange('grayscale', e.target.value)} min={'0'} max={'100'} defaultValue={'0'} className="form-range" id="grayscale" />
                                </div>
                                <div className="mb-3">
                                    <p className="fs-5 text-black fw-light mb-0">Saturation</p>
                                    <input type="range" value={filters.saturation-100} onChange={(e) => handleChange('saturation', e.target.value)} min={'-100'} max={'100'} defaultValue={'0'} className="form-range" id="saturation" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PhotoEditor