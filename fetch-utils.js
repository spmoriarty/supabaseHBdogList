const SUPABASE_URL = 'https://xsjxkslcnzexkeuqopsq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzanhrc2xjbnpleGtldXFvcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTI0MzIsImV4cCI6MTk2Nzg2ODQzMn0.6PW-I5jDnoqhgO6Egpvc5fEpprJ1jHfmAODRlCynp2I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    // from the dogs table, select all items

    // and return the response
    return response.data;    
}

export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id

    // and return the response
    return response.data;    
}
