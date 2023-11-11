import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { cls } from "@/app/_lib/utils";
interface IProps {
  styleProps?: string;
  text?: string;
  onToggleClick(event: React.FormEvent<HTMLButtonElement>): void;
}
const ToggleBtn = ({ onToggleClick }: IProps) => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={onToggleClick}
      className={`${
        enabled ? "bg-white" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={cls(
          enabled ? "translate-x-5" : "translate-x-1",
          "inline-block h-6 w-4 transform rounded-full transition"
        )}
      >
        {enabled ? "🌙" : "☀️"}
      </span>
    </Switch>
  );
};
export default ToggleBtn;
