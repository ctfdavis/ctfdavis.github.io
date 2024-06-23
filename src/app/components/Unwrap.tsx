import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<any>;

export default function Unwrap({ children, className, ...rest }: Props) {
  return (
    <div className={clsx(className, "__unwrap-content")} {...rest}>
      {children}
    </div>
  );
}
