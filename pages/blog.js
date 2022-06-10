import React, { useEffect, useState } from "react";

import Link from "next/link";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <style jsx>
        {`
          h2 {
            font-size: 38px !important;
          }
          h3 {
            font-size: 28px !important;
          }
        `}
      </style>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div className="blogs" key={blogItem.slug}>
              <div className={styles.blogItem}>
                <Link href={`blogpost/${blogItem.slug}`}>
                  <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                </Link>
                <p className={styles.blogItemContent}>
                  {blogItem.content.slice(0, 300)}...
                </p>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Blog;
