import { ME, PHOTO } from '../data'

export default function Avatar({ size = 64 }) {
  return (
    <span className="avatar" style={{ width: size, height: size, fontSize: size * 0.34 }}>
      {PHOTO ? <img src={PHOTO} alt={ME.name} /> : ME.initials}
    </span>
  )
}
