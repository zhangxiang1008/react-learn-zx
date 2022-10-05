import { FC, useEffect, useState } from "react";
import { selectTableData, setData } from "./tableSlice";
import { useAppDispatch, useAppSelector } from '../../store/hook'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Table, Tag, Space, Pagination } from "antd";
import { FilterValue, SorterResult } from "antd/lib/table/interface";

const Index: FC = () => {
  const [tableData, setTableData] = useState([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ])
  const totals = 100
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    showTotal: () => `共${totals}条`,
    onShowSizeChange: (current, pageSize) => handlePageSizeChange(current, pageSize),
    onChange: (current) => handlePageChange(current),
    showSizeChanger: true,
    total: totals
  });
  const data = useAppSelector(selectTableData)
  const myDispatch = useAppDispatch()
  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const handlePageChange = (
    current: Number
  ) => {
    console.log(current)
  }
  const handlePageSizeChange = (
    current: Number,
    pageSize: Number
  ) => {
    console.log(current)
  }
  useEffect(() => {
    myDispatch(setData(tableData))
  }, [myDispatch, tableData])
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={pagination} />
    </div>
  )
}

export default Index