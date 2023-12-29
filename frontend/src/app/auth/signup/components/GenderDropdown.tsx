import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { FieldApi } from "@tanstack/react-form";
import { genderDropdowns } from "../helpers";

type GenderDropdownProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
};

const GenderDropdown = ({ field }: GenderDropdownProps) => {
  const hasError = field.state.meta.touchedErrors.length > 0;
  return (
    <FormControl size="small">
      <InputLabel id="signup-gender-field" error={hasError}>
        Gender
      </InputLabel>
      <Select
        name={field.name}
        labelId="signup-gender-field"
        value={field.state.value ?? ""}
        label="Gender"
        onBlur={field.handleBlur}
        onChange={(v) => field.handleChange(v.target.value)}
        error={hasError}
      >
        {genderDropdowns.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
      {hasError && (
        <FormHelperText error>{field.state.meta.touchedErrors}</FormHelperText>
      )}
    </FormControl>
  );
};

export default GenderDropdown;