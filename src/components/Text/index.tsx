import "../../index.css";

type Props = {
  text: string;
};

export const Text: React.FC<Props> = ({ text }) => {
  return <p className="text-3xl text-blue-50">{text}</p>;
};
