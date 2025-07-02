import { presetFilters } from "./presetFilters";

// eslint-disable-next-line react/prop-types
export default function PresetApplied({ onApplyFilter, disabled = false }) {
  return (
    <div>
      {presetFilters.map((filter) => (
        <button
          key={filter.name}
          size="sm"
          onClick={() => onApplyFilter(filter.adjustments)}
          disabled={disabled}
          className="btn border-0 m-1 rounded-3 fw-semibold muiPurpleOutline"
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}
