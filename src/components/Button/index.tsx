import { ReactNode } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./Button.module.scss";

interface Props {
  display: string;
  variant: string;
  link?: string;
  justifyContentCenter?: boolean;
  children: ReactNode;
}

export const Button = ({
  display = "inline-block",
  variant,
  link = "/",
  justifyContentCenter = false,
  children,
}: Props) => {
  return (
    <>
      {display === "block" && (
        <div
          className={classNames({
            [styles.buttonContainer]: true,
            [styles.justifyContentCenter]: justifyContentCenter,
          })}
        >
          <NavLink
            to={link}
            className={classNames({
              [styles.button]: true,
              [styles.outlined]: variant === "outlined",
              [styles.solid]: variant === "solid",
              [styles.db]: true,
            })}
          >
            {children}
          </NavLink>
        </div>
      )}
      {display === "inline-block" && (
        <NavLink
          to={link}
          className={classNames({
            [styles.button]: true,
            [styles.outlined]: variant === "outlined",
            [styles.solid]: variant === "solid",
            [styles.dib]: true,
          })}
        >
          {children}
        </NavLink>
      )}
    </>
  );
};
