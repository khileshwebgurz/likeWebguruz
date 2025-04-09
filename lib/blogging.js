export const fetchBlogPosts = async (page = 1) => {
    try {
      const response = await fetch(
        `${process.env.NEXTAUTH_URL}/api/getdata?page=${page}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
  
      const { data, currentPage, totalPages } = await response.json();
 
      return { data, currentPage, totalPages };
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      throw error;
    }
  };
  