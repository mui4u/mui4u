type MUI4UDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface MUI4UDemoControlProps {
  type: MUI4UDemoControlType;
  name: string;
  label?: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface MUI4UDemoBase {
  component?: React.FC;
  wrapper?: React.FC<{ children: React.ReactNode }>;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface MUI4UCodeDemo extends MUI4UDemoBase {
  type: 'demo';
  demoProps?: {
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface MUI4UConfiguratorDemo extends MUI4UDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: MUI4UDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type MUI4UDemo = MUI4UCodeDemo | MUI4UConfiguratorDemo;
