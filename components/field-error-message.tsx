import { FieldError as FieldErrorType } from "react-hook-form";
import { FieldError } from "@/components/ui/field";

interface FormErrorMessageProps {
  error?: FieldErrorType;
}
export default function FieldErrorMessage({ error }: FormErrorMessageProps) {
  return (
    <div className="min-h-4">
      {error && <FieldError errors={[error]} />}
    </div>
  );
}
