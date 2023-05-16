interface Props {
  children: React.ReactNode;
}
function Main(props: Props) {
  return <div>{props.children}</div>;
}

export default Main;
