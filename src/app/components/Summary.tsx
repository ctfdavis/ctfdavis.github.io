export default function Summary({ children }: { children: string }) {
  return (
    <div className="text-stone-400 bg-slate-800 py-2 px-8 mt-2 mb-8">
      <h3 className="text-stone-300">Summary</h3>
      {children}
    </div>
  );
}
