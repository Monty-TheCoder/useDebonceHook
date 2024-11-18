//search component where search bar and its search terms will be there
// import all necessary things from here
const [searchTerm, setSearchTerm] = useState<string>("");
const debouncedSearchTerm = useDebouncedValue(searchTerm, 500); // here to use the hook
useEffect(()=>{
  fetchData()//let this is the function for getting data form api
},[debouncedSearchTerm]);
