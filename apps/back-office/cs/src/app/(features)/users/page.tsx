"use client";

import { useEffect, useState } from "react";
import * as z from "zod";
import { Pagination, ReusableCard, Search, Table, TableHeader } from "@lal-erp/ui";
import { debounce } from 'lodash';
import axios from 'axios';
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@mantine/core";
// import { IconPlus } from "@tabler/icons-react";

const UsersPage: React.FC = () =>  {
  const router = useRouter();
  const pathname = usePathname(); 

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with actual total pages
  const [pageSize, setPageSize] = useState(10); // Default page size

  const [selectedUser, setSelectedUser] = useState<any>(null);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
  ];

  const users = [
    {
      id: '1234',
      name: 'Nolawi Mekuriaw',
      email: 'derso2009@gmail.com'
    },
    {
      id: '12345',
      name: 'Solomon A.',
      email: 'sola@gmail.com'
    },
    {
      id: '123456',
      name: 'Biniam E',
      email: 'bini@gmail.com'
    }
  ]

  const validationSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email"),
  });

  const handleSave = async (data: any) => {
    alert("data to be saved: " + data);
  };
  
  const handleUpdate = async (data: any) => {
    alert("data to be updated: " + data);
  };
  
  const handleDelete = async () => {
    alert("data to be deleted: " + selectedUser);
  };

  const fetchData = async (searchQuery: string) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get('/api/records', {
        params: { search: searchQuery },
      });
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Debounce the API call
  const debouncedFetchData = debounce(fetchData, 300);

  // Trigger API call when query changes
  useEffect(() => {
    if (query.trim() !== '') {
      debouncedFetchData(query);
    } else {
      // If the query is empty, clear the data or fetch all records
      setData([]);
    }

    // Cleanup debounce on unmount
    return () => debouncedFetchData.cancel();
  }, [query]);

  const handleNew = () => {
    alert("New")
    router.push('/new');
  };

  const handleDetail = (selectedRow: any) => {
    alert("Selected Row: "+ selectedRow);
    setSelectedUser(selectedRow);
    router.push(`/detail/${selectedRow?.id}`)
  };

  // Slice the data based on the current page and page size
  const paginatedData = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  
  // Determine if the table should display only the primary column
  const isPrimaryColumnView = pathname === "/new" || pathname.startsWith("/detail/");

  return (
    <div>
      <div className="">
        <TableHeader title="Users" newAllowed={true} onAddClick={handleNew}>
          <Search query= {query} setQuery={(inputValue: any)=>setQuery(inputValue)} />
            <Table 
              columns={columns} 
              primaryColumn={isPrimaryColumnView ? "name" : undefined}
              data={users || []} 
              onRowClick={(row: any) => handleDetail(row)} 
              editMode={pathname === "/new" ? "new": pathname.startsWith("/detail/") ? "detail" : "list"}
            />

            {/* Pagination */}
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={(newPage) => setCurrentPage(newPage)}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            />
        </TableHeader>
        <div className="pt-4">
          <ReusableCard
            title="Users"
            subTitle="Manage your users"
            action={
              <Button size="xs" variant="filled" color="blue">
                Add
              </Button>
            }
            collapsible
            defaultCollapsed={false}
            width="100%"
            onCollapseToggle={(isCollapsed) => {
              console.log("Card is collapsed:", isCollapsed);
            }}
          >
            <div>
              <h1>You can add tables, forms, or any other components here.</h1>
            </div>
          </ReusableCard>
        </div>
      </div>


      {/* Right Panel */}
      {isPrimaryColumnView && (
        <div className="p-4">
          {/* {pathname === "/new" && (
            <Form fields={fields} validationSchema={validationSchema} onSubmit={handleSave} />
          )}
          {pathname.startsWith("/detail/") && selectedUser && (
            <>
              <Form
                fields={fields}
                defaultValues={selectedUser}
                validationSchema={validationSchema}
                onSubmit={handleUpdate}
              />
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
              >
                Delete
              </button>
            </>
          )} */}
          <h1>Form Here</h1>
        </div>
      )}

    </div>
  );
}

export default UsersPage;
