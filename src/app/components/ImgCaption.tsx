export default function ImgCaption({ children }: { children: string }) {
  return (
    <p>
      <small>
        <i>{children}</i>
      </small>
    </p>
  );
}
