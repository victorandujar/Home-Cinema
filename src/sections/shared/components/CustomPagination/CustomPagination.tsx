import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  currentPage: number;
  pageName: string;
}

const CustomaPagination = ({
  currentPage,
  pageName,
}: Props): React.ReactElement => {
  const { moviesApiResponse } = useAppSelector((state) => state.movies);
  const [page, setPage] = useState<number>(+currentPage);
  const router = useRouter();

  const handlePaginationChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
    router.push(`${pageName}/page/${value}`);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        size="large"
        count={moviesApiResponse?.total_pages}
        color="secondary"
        page={page}
        siblingCount={5}
        onChange={handlePaginationChange}
        sx={{
          "& .MuiPaginationItem-root": {
            borderRadius: "50%",
          },

          "& .MuiPaginationItem-page:hover": {
            backgroundColor: "#F0F0F0",
          },
          "& .MuiPaginationItem-page": {
            color: "#BBBBBB",
          },
          "& .MuiPaginationItem-page, & .MuiPaginationItem-ellipsis, & .MuiPaginationItem-previous, & .MuiPaginationItem-next":
            {
              color: "#FFFFFF",
            },
        }}
        aria-label={`Go to page ${page}`}
      />
    </Stack>
  );
};

export default CustomaPagination;
