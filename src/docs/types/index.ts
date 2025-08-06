export interface ComponentGroup {
  name: string;
  components: ComponentInfo[];
}

export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
}

export interface ExampleProps {
  title: string;
  description?: string;
  code: string;
  component: React.ReactNode;
}
