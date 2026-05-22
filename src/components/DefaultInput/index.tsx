type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input id={id} type={type} {...rest}></input>
    </>
  );
}

export { DefaultInput };
