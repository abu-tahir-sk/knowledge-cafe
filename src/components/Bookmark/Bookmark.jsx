import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
      const {title} = bookmark;
      return (
            <div className="bg-white p-4 m-2 rounded-md">
                  <h3 className="text-1xl">{title}</h3>
            </div>
      );
};

Bookmark.protoType = {
      bookmark: PropTypes.object
}

export default Bookmark;