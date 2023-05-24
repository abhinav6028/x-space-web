import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default function GridImages() {

    return (
        // <></>
        <ImageList
            variant="quilted"
            cols={12}
        >
            {itemData.map((item) => (

                <ImageListItem sx={{
                    p: 2, columnCount: {
                        xs: 1,
                    },
                }} key={item.img} cols={item.cols} rows={item.rows}>
                    <img width="100%"
                        src={require(`../../../../assets/Images/works/${item.img}`)}
                        loading="lazy"
                        alt="gallery"
                    />
                </ImageListItem>

            ))}
        </ImageList>
    )
}

const itemData = [
    {
        img: 'work-1.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-2.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-3.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-4.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-5.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-6.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-7.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-8.jpeg',
        rows: 3,
        cols: 4,
    },
    {
        img: 'work-9.jpeg',
        rows: 3,
        cols: 4,
    },

];