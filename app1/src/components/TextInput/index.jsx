import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => (
	<input
		onChange={handleChange}
		type="search"
		name=""
		className="text-input"
		id=""
		value={searchValue}
		placeholder="Type your search"
	/>
);
