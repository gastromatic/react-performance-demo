import { FunctionComponent, useState } from "react";

type FibonacciFormProps = {
  onSubmit: (val: string) => void;
};

const FibonacciForm: FunctionComponent<FibonacciFormProps> = ({ onSubmit }) => {
  const [num, setNum] = useState<string>("");

  const onChange = (num: string) => setNum(num);

  return (
    <div className="input-group mb-3">
      <input
        value={num}
        onChange={(e) => onChange(e.target.value)}
        className="form-control"
        placeholder="Number"
        aria-label="Number"
        aria-describedby="basic-addon1"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => onSubmit(num)}
        disabled={!num}
      >
        Calculate!
      </button>
    </div>
  );
};

export default FibonacciForm;
