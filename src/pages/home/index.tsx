import { Space, Button, Color } from '@leslies/rc-component';
import './styles.scss';
export default function Home() {
  return (
    <Space direction="vertical">
      <h1>Home</h1>
      <Button type="primary" block>
        primary
      </Button>
      <Color
        data={[
          { name: 'brand-1', value: '#1890ff' },
          { name: 'brand-2', value: '#000000' },
          { name: 'brand-3', value: '#000000' },
          { name: 'brand-4', value: '#000000' },
        ]}
      />
    </Space>
  );
}
