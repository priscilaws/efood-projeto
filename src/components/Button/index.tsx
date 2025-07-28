import { ButtonContainer, ButtonLink } from "./styles";

type Props = {
  type: "button" | "link";
  title?: string;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  color?: "navy" | "brick";
};

const Button = ({
  type,
  title,
  to = "",
  onClick,
  children,
  color = "navy",
}: Props) => {
  if (type === "button") {
    return (
      <ButtonContainer
        type="button"
        color={color}
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to} title={title} color={color}>
      {children}
    </ButtonLink>
  );
};

export default Button;
