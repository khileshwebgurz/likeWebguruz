// lib/blogsData.js
export async function getBlogData(pageNumber) {
  
  
    // Fetch data from your API or database
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata?page=${pageNumber}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    
    const { data, currentPage, totalPages } = await response.json();
    
    return { posts: data, paginatedPosts: data, totalPages, currentPage };
  }
  