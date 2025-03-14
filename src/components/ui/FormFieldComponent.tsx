import { HTMLInputTypeAttribute } from "react";
import { FormControl, FormField, FormItem, FormMessage } from "./form";
import { Input } from "./input";

interface IFormFieldComponent {
  control: any;
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  isProfile?: boolean;
  className?: string;
  defaultValue?: any;
}

export const FormFieldComponent = (props: IFormFieldComponent) => {
  const {
    control,
    name,
    type,
    placeholder,
    isProfile = false,
    className,
    defaultValue,
  } = props;

  return (
    <FormField
      defaultValue={defaultValue}
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              isProfile={isProfile}
              type={type}
              placeholder={placeholder}
              className={className}
              defaultValue={defaultValue}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
