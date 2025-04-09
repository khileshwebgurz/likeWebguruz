// lib/fetchData.js
export async function fetchPosts() {
    try {
      const res = await fetch(
        `${process.env.NEXTAUTH_URL}/api/getdata?limit=1000`,
        {
          next: { revalidate: 0 }, // Optional: Configure ISR revalidation interval
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
  
      const { data } = await res.json();
      return data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  