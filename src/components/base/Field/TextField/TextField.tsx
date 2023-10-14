import { useId } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
function TextField(props: Props) {
  const { label, ...rest } = props;
  const id = useId();
  return (
    <div className="w-full flex flex-col gap-y-1">
      {label && (
        <label className="text-gray-700 font-medium text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <input className="h-10 py-1 px-3 rounded focus:border-primary-200 border-gray-400 border" id={id} {...rest} />
    </div>
  );
}

TextField.defaultProps = {
  label: '',
};
export default TextField;
