"use client";
import FormSection from "./FormSection";
import { FormButton } from "./styled-components";
import MuiLocalizationProvider from "@/components/MuiLocalizationProvider";
import useUtils from "../hooks/basic-info-form.hook";
import { MuiTanDateField, MuiTanTextField } from "@/components/MuiTanFields";
import GenderDropdown from "./GenderDropdown";
import {
  firstNameValidator,
  genderValidator,
  lastNameValidator,
} from "@/lib/client/form-validators";

const BasicInfoForm = () => {
  const { form, state, utils } = useUtils();

  return (
    <form.Provider>
      <FormSection
        isLoading={state.isLoading}
        title="Basic information"
        onReset={utils.resetForm}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        buttons={
          <>
            <FormButton type="reset" color="secondary" variant="contained">
              Reset
            </FormButton>
            <FormButton type="submit" variant="contained">
              Save
            </FormButton>
          </>
        }
      >
        <form.Field
          name="firstName"
          validators={{
            onBlur: firstNameValidator,
          }}
        >
          {(field) => <MuiTanTextField field={field} label="First name" />}
        </form.Field>

        <form.Field
          name="lastName"
          validators={{
            onBlur: lastNameValidator,
          }}
        >
          {(field) => <MuiTanTextField field={field} label="Last name" />}
        </form.Field>

        <form.Field name="dateOfBirth">
          {(field) => (
            <MuiLocalizationProvider>
              <MuiTanDateField field={field} label="Date of birth" />
            </MuiLocalizationProvider>
          )}
        </form.Field>

        <form.Field
          name="gender"
          validators={{
            onBlur: genderValidator,
          }}
        >
          {(field) => <GenderDropdown field={field} />}
        </form.Field>
      </FormSection>
    </form.Provider>
  );
};

export default BasicInfoForm;
