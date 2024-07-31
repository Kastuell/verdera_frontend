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
}

export const FormFieldComponent = (props: IFormFieldComponent) => {
  const {
    control,
    name,
    type,
    placeholder,
    isProfile = false,
    className,
  } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              isProfile={isProfile}
              type={type}
              placeholder={placeholder}
              {...field}
              className={className}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
