export default function SectionTitle({ title }) {
  return (
    <div className="text-center py-4">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="mt-2 h-1 w-16 mx-auto bg-pink-500 rounded" />
    </div>
  );
}
