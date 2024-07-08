import React from "react";
import "./singlepost.css";
import Img from "../../assets/ramkrisna.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SinglePost = () => {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img src={Img} alt="" className="Img" />
        <div className="deleteEdit">
          <span className="title">This is my first blog</span>
          <div className="editDelete">
            <EditIcon className="icon edit"/>
            <DeleteIcon className="icon delete"/>
          </div>
        </div>
        <div className="userInfo">
          <span className="userName">
            Author : <b>Nayan Kumar Ray</b>
          </span>
          <span className="date">{new Date("2024-03-25").toDateString()}</span>
        </div>
        <div className="desc">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, facere
          consectetur! Laboriosam doloribus in repellat autem nihil qui
          voluptatem ratione perferendis ducimus nostrum? Maxime perspiciatis
          molestias porro cum commodi soluta. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Maiores laborum explicabo numquam
          magnam saepe maxime eligendi fuga quo? Iste, neque suscipit quod eaque
          rerum nesciunt adipisci non voluptas! Officia, reiciendis?Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Impedit incidunt itaque
          </p>
          <p>
          vel minus. Consectetur delectus tempora doloribus fugit maxime amet
          dignissimos deserunt incidunt, beatae itaque aut ea dolor obcaecati
          in?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          aliquam? Dolor nesciunt ipsa fuga, deserunt quas tempore quisquam
          commodi ipsam perferendis fugit fugiat et aperiam natus pariatur
          voluptatibus sunt cupiditate!Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Animi distinctio dolore natus. Dolor
          dolores odit temporibus minus expedita voluptatum quia eos maxime non
          porro ut placeat, quam dicta fugit iusto?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ratione libero vel alias adipisci optio
          sequi, hic quos quam neque quasi mollitia voluptas voluptatibus
          </p>
          <p>
          nostrum quisquam iste earum suscipit debitis temporibus. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Laudantium deleniti ab
          iste corporis! Eum et odio, officia cumque molestias voluptas, aliquam
          placeat vero aliquid inventore eaque ad esse tempora harum. Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Magnam numquam
          officiis molestias labore ex, repellat ea repudiandae recusandae
          tempore incidunt. Quis inventore labore non libero provident sequi
          veniam consequuntur tempora. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Qui molestias porro officiis sint animi aspernatur
          fugit maiores dicta ullam? Aut distinctio beatae voluptatem aliquam
          hic dolores. Minima adipisci culpa odio?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
