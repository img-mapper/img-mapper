import type { ImageMapperProps } from '@/@types';

type RequiredProps = 'src' | 'name' | 'areas';

export type ImageMapperDefaultProps = Omit<ImageMapperProps, RequiredProps>;
