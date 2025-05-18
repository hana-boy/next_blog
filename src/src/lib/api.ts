export async function getPosts() {
  try {
    const res = await fetch(`${process.env.MICROCMS_API_URL}/v1/blogs`, {
      headers: {
        "X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`,
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

export async function getPostById(id: string) {
  try {
    const res = await fetch(`${process.env.MICROCMS_API_URL}/v1/blogs/${id}`, {
      headers: {
        "X-MICROCMS-API-KEY": `${process.env.MICROCMS_API_KEY}`,
        "Content-Type": "application/json"
      }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}
