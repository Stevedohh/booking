export interface RoomBenefits {
  name: string,
  value: string | number,
  key: string,
}

export interface RoomView {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  longDescription?: string;
  benefits: Array<RoomBenefits>
}

export interface TinyRoomView {
  id: number;
  title: string;
  imageUrl: string;
  benefits: Array<RoomBenefits>
}
