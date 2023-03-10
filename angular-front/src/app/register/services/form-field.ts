export class FormField<T> {
  order: number;
  key: string;
  value: T | undefined;
  label: string;
  isRequired: boolean;
  validator: string;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];

  constructor(
    options: {
      order?: number;
      key?: string;
      value?: T;
      label?: string;
      isRequired?: boolean;
      validator?: string;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.order = options.order === undefined ? 1 : options.order;
    this.key = options.key || "";
    this.value = options.value;
    this.label = options.label || "";
    this.isRequired = !!options.isRequired;
    this.validator = options.validator || "";
    this.controlType = options.controlType || "";
    this.type = options.type || "";
    this.options = options.options || [];
  }
}
