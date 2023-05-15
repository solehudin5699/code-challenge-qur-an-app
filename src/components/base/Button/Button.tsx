type Props = React.HTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
}

export default Button;
