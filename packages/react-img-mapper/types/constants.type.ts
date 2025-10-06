import type { ImageMapperProps } from 'packages/react-img-mapper/types/index';

type RequiredProps = 'src' | 'name' | 'areas';

export type ImageMapperDefaultProps = Omit<ImageMapperProps, RequiredProps>;
