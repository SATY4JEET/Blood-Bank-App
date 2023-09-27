import React from "react";
import Layout from "../../components/shared/layout/Layout";
import { useSelector } from "react-redux/es/hooks/useSelector";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user.name}</i>
          </h1>
          <h3>Manage Blood Bank App</h3>
          <hr />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quasi
            maiores repellat, maxime itaque voluptatum laborum, quis fugit iusto
            illum veniam cumque. Animi rerum error facilis pariatur odit tempora
            optio! Sunt voluptatum ipsa ad molestias praesentium distinctio non,
            maiores aliquid provident? Saepe accusantium ipsa distinctio
            dignissimos odio sed laborum enim vitae eveniet eos voluptas
            consequatur quae similique pariatur magnam, consequuntur explicabo
            ratione iste quam numquam cupiditate nihil. Soluta, quis officiis?
            Ad doloribus blanditiis necessitatibus asperiores quidem vel culpa,
            optio, consequuntur eum illo suscipit deserunt laborum inventore
            quisquam at repudiandae ea praesentium autem doloremque laudantium,
            atque magnam! Error quisquam ab quae.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
