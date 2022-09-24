import { classNames } from "../utils";

export default function Line({ className }) {
  return (
    <hr
      className={classNames(
        "dark:opacity-70 w-11 mt-4 mb-7 rounded-lg h-[3px] bg-slate-200 border-none block",
        className
      )}
    />
  );
}
