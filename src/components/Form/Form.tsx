import { useForm, FieldValues, Path } from "react-hook-form";

interface FormField<T extends FieldValues> {
  name: Path<T>;
  type: string;
  label: string;
  placeholder?: string;
  validation?: object;
}

interface ReusableFormProps<T extends FieldValues> {
  onSubmit: (data: T) => void;
  fields: FormField<T>[];
  submitText: string;
}

const ReusableForm = <T extends FieldValues>({
  onSubmit,
  fields,
  submitText,
}: ReusableFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<T>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-2 bg-white rounded-lg"
    >
      {fields.map((field) => (
        <div key={field.name.toString()} className="mb-6">
          <label className="block text-sm font-medium  text-indigo-500">
            {field.label}
          </label>
          <input
            type={field.type}
            {...register(field.name, field.validation)}
            placeholder={field.placeholder}
            className={`mt-2 w-full p-3 border rounded-lg focus:outline-none  focus:ring-3 focus:ring-indigo-500 ${
              errors[field.name]
                ? "border-red-500 focus:ring-red-500"
                : "border-indigo-300"
            }`}
          />
          {errors[field.name] && (
            <p className="text-sm text-red-500">
              {(errors[field.name] as any).message}
            </p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400"
      >
        {isSubmitting ? "Processing..." : submitText}
      </button>
    </form>
  );
};

export default ReusableForm;
