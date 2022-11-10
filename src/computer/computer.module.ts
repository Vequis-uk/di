import { ComputerController } from './computer.controller';
import { CpuModule } from './../cpu/cpu.module';
import { DiskModule } from './../disk/disk.module';
import { Module } from '@nestjs/common';

@Module({
    imports: [DiskModule, CpuModule],
    controllers: [ComputerController]
})
export class ComputerModule {}
