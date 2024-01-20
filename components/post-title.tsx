export default function PostTitle({ children }) {
  return (
    <h1
      className="text-3xl font-bold"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
