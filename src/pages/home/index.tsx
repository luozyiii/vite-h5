import { Button, Color } from 'rc-component';
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button type="primary">primary</Button>
      <Color
        data={[
          { name: '--brand-1', value: '#1890ff' },
          { name: '--brand-2', value: '#000000' },
          { name: '--brand-3', value: '#000000' },
          { name: '--brand-4', value: '#000000' },
        ]}
      />
    </div>
  );
}
