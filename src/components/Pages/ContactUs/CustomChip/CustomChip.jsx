const { Chip, IconButton } = require('@mui/material');

export const CustomChip = ({
  label,
  onDelete,
  onSetFormState,
  arrayKey,
}) => {
  return (
    <Chip
      onMouseDown={(event) => {
        event.stopPropagation();
      }}
      label={
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {label}
          <IconButton
            size="small"
            style={{ marginLeft: 8 }}
            aria-label="delete"
            data-interested-value={label}
            onClick={() => onDelete(label, onSetFormState, arrayKey)}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                pointerEvents: 'none'
              }}
            >
              <g opacity="0.5">
                <path d="M3 9L9.5 2.5" stroke="#201B21" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 9L3 2.5" stroke="#201B21" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </IconButton>
        </span>
      }
    />
  );
};
