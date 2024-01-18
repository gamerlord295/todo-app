const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (e?:any) => void;
}) => {
  return (
    <label htmlFor="">
      <input
        checked={checked}
        type="checkbox"
        name=""
        id=""
        onChange={onChange}
      />
      <span className="checkmark" />
    </label>
  );
};

export default Checkbox;
