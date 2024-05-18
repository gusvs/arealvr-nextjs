import style from "./ui-select-field.module.css";

export function UiSelectField<
  IdKey extends string,
  LabelKey extends string,
  Option extends Record<IdKey, number | string | undefined> &
    Record<LabelKey, string>
>({
  idKey,
  labelKey,
  onChange,
  options,
  value,
}: {
  idKey: IdKey;
  labelKey: LabelKey;
  value: Option[IdKey];
  onChange: (value: Option[IdKey]) => void;
  options: Option[];
}) {
  return (
    <div className={style.selectPlatform}>
      <select
        className={style.changePlatform}
        value={value}
        onChange={(e) => onChange(e.target.value as Option[IdKey])}
      >
        {options.map((option) => (
          <option key={option[idKey]} value={option[idKey]}>
            {option[labelKey]}
          </option>
        ))}
      </select>
    </div>
  );
}
