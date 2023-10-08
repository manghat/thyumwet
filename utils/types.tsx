export interface ImageProps {
  id: number;
  idc: string;
  height: number;
  width: number;
  blurDataURL?: string | undefined;
  src: string;
  placeholder?: string;
  alt: string;
  date?: string;
}

export interface SharedModalProps {
  index: number;
  images: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}

export interface ImageSeriesProps {
  id: number;
  idc: string;
  height?: number;
  width?: number;
  blurDataURL: string | undefined;
  src: string;
  placeholder?: string;
  alt: string;
  date: string;
  seriesTitle: string;
  description: string;
  slug: string;
  images?: ImageProps[];
}
