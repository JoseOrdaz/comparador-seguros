import useComparador from "../hooks/useComparador";

const Error = () => {
  const { error } = useComparador();
  return (
    <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700">
      <p>{error}</p>
    </div>
  );
};

export default Error;
