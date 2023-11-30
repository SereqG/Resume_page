export interface SectionInput {
  label: string;
  type: string;
  name: string;
}

export interface SectionProps {
  name: string;
  id: string;
  inputs: SectionInput[];
}

export interface Sections {
  [key: string]: SectionProps;
}
